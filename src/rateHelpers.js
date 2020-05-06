import { cloneDuration } from "./durationHelpers"

export const cloneRate = (rate) => ({
		 amount: rate.amount,
		 per: cloneDuration(rate.per)
       })

export const standardRate = cloneRate({
	amount: 1,
	per: {hours: 1}
})