import { CheckCircle2, XCircle } from "lucide-react"

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="p-4 text-left text-slate-400 font-medium">Features</th>
            <th className="p-4 text-center">
              <div className="text-white font-bold">GPT-4o</div>
              <div className="text-sm text-primary">OpenAI</div>
            </th>
            <th className="p-4 text-center">
              <div className="text-white font-bold">Claude 3</div>
              <div className="text-sm text-pink-500">Anthropic</div>
            </th>
            <th className="p-4 text-center">
              <div className="text-white font-bold">Gemini Pro</div>
              <div className="text-sm text-cyan-500">Google</div>
            </th>
            <th className="p-4 text-center">
              <div className="text-white font-bold">Llama 3</div>
              <div className="text-sm text-purple-500">Meta</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-800">
            <td className="p-4 text-slate-300">Context Window</td>
            <td className="p-4 text-center text-slate-300">128K tokens</td>
            <td className="p-4 text-center text-slate-300">200K tokens</td>
            <td className="p-4 text-center text-slate-300">32K tokens</td>
            <td className="p-4 text-center text-slate-300">8K tokens</td>
          </tr>
          <tr className="border-b border-slate-800">
            <td className="p-4 text-slate-300">Cost (per 1M tokens)</td>
            <td className="p-4 text-center text-slate-300">$10</td>
            <td className="p-4 text-center text-slate-300">$8</td>
            <td className="p-4 text-center text-slate-300">$3.50</td>
            <td className="p-4 text-center text-slate-300">Free (Self-hosted)</td>
          </tr>
          <tr className="border-b border-slate-800">
            <td className="p-4 text-slate-300">Response Speed</td>
            <td className="p-4 text-center">
              <div className="flex justify-center">
                <div className="w-24 h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[90%]"></div>
                </div>
              </div>
            </td>
            <td className="p-4 text-center">
              <div className="flex justify-center">
                <div className="w-24 h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[75%]"></div>
                </div>
              </div>
            </td>
            <td className="p-4 text-center">
              <div className="flex justify-center">
                <div className="w-24 h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[95%]"></div>
                </div>
              </div>
            </td>
            <td className="p-4 text-center">
              <div className="flex justify-center">
                <div className="w-24 h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[85%]"></div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="border-b border-slate-800">
            <td className="p-4 text-slate-300">Multimodal (Images)</td>
            <td className="p-4 text-center text-green-500">
              <CheckCircle2 className="inline-block w-5 h-5" />
            </td>
            <td className="p-4 text-center text-green-500">
              <CheckCircle2 className="inline-block w-5 h-5" />
            </td>
            <td className="p-4 text-center text-green-500">
              <CheckCircle2 className="inline-block w-5 h-5" />
            </td>
            <td className="p-4 text-center text-red-500">
              <XCircle className="inline-block w-5 h-5" />
            </td>
          </tr>
          <tr className="border-b border-slate-800">
            <td className="p-4 text-slate-300">Code Generation</td>
            <td className="p-4 text-center">
              <div className="flex justify-center">
                <div className="w-24 h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[95%]"></div>
                </div>
              </div>
            </td>
            <td className="p-4 text-center">
              <div className="flex justify-center">
                <div className="w-24 h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[85%]"></div>
                </div>
              </div>
            </td>
            <td className="p-4 text-center">
              <div className="flex justify-center">
                <div className="w-24 h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[80%]"></div>
                </div>
              </div>
            </td>
            <td className="p-4 text-center">
              <div className="flex justify-center">
                <div className="w-24 h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[70%]"></div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="border-b border-slate-800">
            <td className="p-4 text-slate-300">Self-Hosting Option</td>
            <td className="p-4 text-center text-red-500">
              <XCircle className="inline-block w-5 h-5" />
            </td>
            <td className="p-4 text-center text-red-500">
              <XCircle className="inline-block w-5 h-5" />
            </td>
            <td className="p-4 text-center text-red-500">
              <XCircle className="inline-block w-5 h-5" />
            </td>
            <td className="p-4 text-center text-green-500">
              <CheckCircle2 className="inline-block w-5 h-5" />
            </td>
          </tr>
          <tr>
            <td className="p-4 text-slate-300">Best For</td>
            <td className="p-4 text-center text-slate-300">General purpose, complex tasks</td>
            <td className="p-4 text-center text-slate-300">Long documents, safety critical</td>
            <td className="p-4 text-center text-slate-300">Cost-effective, fast responses</td>
            <td className="p-4 text-center text-slate-300">Privacy, customization</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

