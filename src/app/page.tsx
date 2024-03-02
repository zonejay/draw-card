'use client'
import {useState} from 'react'
enum Minions {
  'R' = 'R',
  'SR' = 'SR',
  'SSR' = 'SSR',
  'SP' = 'SP'
}
type MinionState = {
  [key in Minions]: number
}
export default function Home() {
  const [resultCounts, setResultCounts] = useState<MinionState>({
    SP: 0,
    SSR: 0,
    SR: 0,
    R: 0
  })
  const drawCard = () => {
    const randomNumber = Math.random() * 100
    if (randomNumber < 78.75) {
      return Minions.R
    } else if (randomNumber < 98.75) {
      return Minions.SR
    } else if (randomNumber < 99.75) {
      return Minions.SSR
    } else {
      return Minions.SP
    }
  }
  const singleDraw = () => {
    const result = drawCard()
    updateResult(result)
  }
  function multiDraw() {
    const tempResultCounts = {...resultCounts}

    for (let i = 0; i < 10; i++) {
      const result = drawCard()
      tempResultCounts[result]++
    }

    setResultCounts(tempResultCounts) // 只在循环之后一次性更新状态值
  }

  // 清空函数
  const clearResults = () => {
    setResultCounts({
      SP: 0,
      SSR: 0,
      SR: 0,
      R: 0
    })
  }

  const updateResult = (result: Minions) => {
    const tempResultCounts = {...resultCounts}
    tempResultCounts[result]++
    setResultCounts(tempResultCounts)
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl font-bold text-center mt-8 mb-4">抽卡模拟</h1>
        <div className="p-4 bg-gray-100 shadow-md">
          <div className="flex justify-center mt-4">
            <button
              onClick={singleDraw}
              className="mr-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              单抽
            </button>
            <button
              onClick={multiDraw}
              className="mr-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              十连
            </button>
            <button
              onClick={clearResults}
              className="px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
            >
              清空
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">R阶78.75%，SR阶20%，SSR阶1%，SP阶0.25%</p>
          </div>
          <div className="mt-8">
            <div className="text-center">
              <h2 className="text-xl font-semibold">抽卡结果</h2>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-4">
              <div>
                <p className="font-semibold">SP:</p>
                <p>数量: {resultCounts.SP}</p>
              </div>
              <div>
                <p className="font-semibold">SSR:</p>
                <p>数量: {resultCounts.SSR}</p>
              </div>
              <div>
                <p className="font-semibold">SR:</p>
                <p>数量: {resultCounts.SR}</p>
              </div>
              <div>
                <p className="font-semibold">R:</p>
                <p>数量: {resultCounts.R}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
