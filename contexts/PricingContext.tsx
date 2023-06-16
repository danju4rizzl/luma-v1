"use client"

import React, { createContext, useContext, useState } from "react"

import { AppStateContextType, TogglerType } from "@/types"

const AppStateContext = createContext<AppStateContextType | undefined>(
	undefined
)

export function AppStateProvider({ children }: { children: React.ReactNode }) {
	const [activeButton, setActiveButton] = useState<TogglerType>("monthly")

	return (
		<AppStateContext.Provider value={{ activeButton, setActiveButton }}>
			{children}
		</AppStateContext.Provider>
	)
}

export function useAppState() {
	const context = useContext(AppStateContext)
	if (!context) {
		throw new Error("useAppState must be used within an AppStateProvider")
	}
	return context
}
