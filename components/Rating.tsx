import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import { RatingProps } from "@/types"

export default function Rating({ ratedBy, rating }: RatingProps) {
	return (
		<div>
			<ul className="flex gap-x-2">
				{/* Loop over the rating and display the stars. Must check for floats too */}
				{(() => {
					const stars = []
					for (let i = 1; i <= 5; i++) {
						if (i <= Math.floor(rating)) {
							stars.push(
								<li key={i}>
									<BsStarFill color="teal" />
								</li>
							)
						} else if (i - rating > 0 && i - rating < 1) {
							stars.push(
								<li key={i}>
									<BsStarHalf color="teal" />
								</li>
							)
						} else {
							stars.push(
								<li key={i}>
									<BsStar color="teal" />
								</li>
							)
						}
					}
					return stars
				})()}
			</ul>
			<p>
				<span className="font-bold">{rating} </span>/ 5 rating
			</p>
			<p className="font-bold text-gray-400">{ratedBy}</p>
		</div>
	)
}
