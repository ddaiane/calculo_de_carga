import React, { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export default function GlobalProvider({ children }: { children: React.ReactNode }) {
  const context = {}

  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
}
