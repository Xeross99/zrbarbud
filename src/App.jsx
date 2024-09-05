import image from './images/background.webp'

function App() {
  return (
    <main class="relative isolate min-h-full">
      <img src={image} alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-top saturate-150 brightness-50" />
      <div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p class="text-base font-semibold leading-8 text-white">Strona w przygotowaniu</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Zakład Remontowo-Budowlany Ar-Bud</h1>
        <p class="mt-4 text-base text-white/70 sm:mt-6">Pracujemy nad uruchomieniem naszej nowej witryny. Już wkrótce znajdziesz tutaj pełne informacje o naszych usługach.</p>
      </div>
    </main>
  );
}

export default App;
