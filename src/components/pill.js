"use client"

export default function Pill({ time, image, humidity, temp }) {
    return (
        <div className="w-fit rounded-full bg-gradient-to-br p-[2px] from-[rgb(77,75,157)] to-[rgb(64,59,130)]">
            <article
                className="bg-darkCompBg
                min-w-[65px] w-fit px-2 py-5 rounded-full
                flex flex-col items-center font-semibold
                drop-shadow-[5px_4px_10px_rgba(0,0,0,0.25)]
                shadow-inner-[1px_1px_0_rgba(255,255,255,0.25)]">
                <p className="text-white mb-2">{time}</p>
                <img src="https://placehold.co/32" className="mb-[-.4em]" />
                <p className="text-sm text-[cyan]">{humidity}</p>
                <p className="text-[white] mt-2">{temp}&deg;</p>
            </article>
        </div>
    )
}
