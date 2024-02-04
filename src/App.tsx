import { useState } from 'react'
import './App.css'
import data from "./books.json"

function App() {
  const booksPerPage = 5
  const totalPages = Math.ceil(data.library.length / booksPerPage)
  const [actualPage, setActualPage] = useState(1)
  const genres = new Set(data.library.map(el => {
    return el.book.genre
  }))

  const nextPage = () => {
    if (actualPage != totalPages) {
      setActualPage(actualPage + 1)
    }
  }
  const prevPage = () => {
    if (actualPage > 1) {
      setActualPage(actualPage - 1)
    }
  }


  return (
    <>
      <header>
        <h1>Books List</h1>
        <h2>x disponible books</h2>
      </header>

      <main>
        <aside style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <label htmlFor="" >
            Filter by pages
            <br />
            <a onClick={prevPage}>Prev</a>
            &nbsp;
            {actualPage + '/' + totalPages}
            &nbsp;
            <a onClick={nextPage}>Next</a>
          </label>
          <label htmlFor="" >
            Filter by genre
            <br />
            <select name="" id="">
              {[...genres].map((genre, index) =>
                <option key={index} value={genre}>
                  {genre}
                </option>
              )}
            </select>
          </label>
        </aside>

        <section>
          
        </section>
      </main>
    </>
  )
}

export default App
