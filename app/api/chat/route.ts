
import { NextResponse } from "next/server"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { HumanMessage, SystemMessage, AIMessage } from "@langchain/core/messages"

export async function POST(req: Request) {
  const { message, history } = await req.json()

  if (!message || !Array.isArray(history)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 })
  }

  try {
    // Initialize Gemini model
    const model = new ChatGoogleGenerativeAI({
      model: "gemini-1.5-pro",
      apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
      maxOutputTokens: 200,
    })

    // System prompt about Horipriya Das Arpita
    const systemPrompt = `
      You are an AI assistant for Horipriya Das Arpita, a full-stack developer with 1 year of experience. 
      Horipriya Das Arpita specializes in React, Next.js, and Node.js development. He has worked on e-commerce platforms, 
      social media dashboards, and task management applications. Horipriya Das Arpita is based in New York, available for 
      freelance projects, and has a Computer Science degree. He started coding at University First Year, enjoys art and 
      music, and has won hackathon awards for innovative solutions. 
      Provide concise, relevant responses about Horipriya Das Arpita based on user queries.
    `

    // Convert chat history to LangChain messages
    const historyMessages = history.flatMap((msg: { sender: string; content: string }) => {
      return msg.sender === "user"
        ? new HumanMessage(msg.content)
        : new AIMessage(msg.content)
    })

    // Construct messages array: SystemMessage first, then history, then current user message
    const messages = [
      new SystemMessage(systemPrompt),
      ...historyMessages,
      new HumanMessage(message),
    ]

    // Call the model
    const response = await model.invoke(messages)

    // Extract the response content
    const botResponse = response.content as string

    return NextResponse.json({ response: botResponse }, { status: 200 })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}