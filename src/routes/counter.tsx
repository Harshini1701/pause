import { useCounterStore } from '../hooks/use-counter'

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">Count: {count}</h2>
      <div className="space-x-2">
        <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
      </div>
    </div>
  )
}
