// Centralized asset URL resolver using Vite's glob imports
// Accepts absolute '/src/assets/...' paths and returns a built URL

type AssetModule = { default: string }

// Eagerly import all assets under src/assets so we can resolve by path
const assetModules = import.meta.glob('/src/assets/**/*', { eager: true }) as Record<string, AssetModule>

export function resolveAssetUrl(input: string): string {
  if (!input) return input
  const key = input.startsWith('/src/') ? input : `/src/${input.replace(/^\/?/, '')}`
  const mod = assetModules[key]
  if (mod && typeof mod.default === 'string') return mod.default
  // Fallback: return input unchanged
  return input
}

export function resolveAssetUrls(inputs: string[]): string[] {
  return inputs.map(resolveAssetUrl)
}