'use client'
import { FC, useEffect } from 'react'
import { threeBag } from './threeBag'

const Bag: FC = () => {
	useEffect(() => {
		threeBag('threeBag')
	}, [])
	return <canvas id='threeBag'></canvas>
}

export default Bag
