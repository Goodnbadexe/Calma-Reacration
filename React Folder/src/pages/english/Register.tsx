import { Button } from '@/components/ui/button'

export default function Register() {
  return (
    <main>
      <section className="section">
        <div className="section-inner">
          <h1>Register Your Interest</h1>
          <p>Share your details to receive updates about Calma projects.</p>
          <div style={{marginTop:16}}>
            <Button className="rounded-full">Submit Interest</Button>
          </div>
        </div>
      </section>
    </main>
  )
}