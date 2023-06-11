"use client"

import { CustomLottiePlayerProps } from "@/types"
import { Player } from "@lottiefiles/react-lottie-player"

/**
 **  The CustomLottiePlayer component depends on lottie player, which uses classes under the hood. This component must be client-side rendered
 */
export default function CustomLottiePlayer({ src }: CustomLottiePlayerProps) {
	return (
		<div>
			<Player src={src} loop autoplay />
		</div>
	)
}
