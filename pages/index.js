import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="FOCUSED To Do" />
        <p className="description">
Do you have anything to add?
        </p>
        <form>
          <input type="text"></input>
          <button class="btn-add">ADD +</button>
        </form>
          <h2>The Most Important Items:</h2>
          <ul>
            <li><button class="btn-done">DONE</button><button class="btn-focus">FOCUS</button><button class="btn-del">DEL</button>Buy Groceries</li>
            <li><button class="btn-done">DONE</button><button class="btn-focus">FOCUS</button><button class="btn-del">DEL</button>Change Jobs</li>
            <li><button class="btn-done">DONE</button><button class="btn-focus">FOCUS</button><button class="btn-del">DEL</button>Build Passive Income</li>
            <li><button class="btn-done">DONE</button><button class="btn-focus">FOCUS</button><button class="btn-del">DEL</button>Raise Children</li>
          </ul>
      </main>

      <Footer />
    </div>
  )
}
