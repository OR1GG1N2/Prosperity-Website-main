import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { HeartIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

import logo from "@public/prosperity.svg";
import A from "@components/A";

export default function Menu() {
	const links: { href: string; text: string; loose?: boolean }[] = [
		{ href: "/", text: "Главная" },
		// { href: "/projects", text: "Проекты", loose: true },
		{ href: "https://wiki.origg.in/", text: "Wiki", loose: true },
		{ href: "https://minecamp.dynmap.xyz/", text: "Карта" }
	];
	const [hasScrolled, setHasScrolled] = useState(false);

	// TODO: Fix a behavior where the signal isn't updated upon reloading a page
	// with a saved scroll position.
	if (typeof window != "undefined") {
		window.addEventListener("scroll", () => {
			setHasScrolled(window.scrollY >= 1 ? true : false);
		});
	}

	return (
		<nav
			className={`z-50 sticky top-0 border-b border-zinc-700/0 select-none duration-150 ${
				hasScrolled
					? "bg-zinc-950/60 border-zinc-700/100 backdrop-blur-md py-2.5 border-b"
					: "py-2.5"
			}`}>
			
			<div className={`flex justify-between items-center content-width`}>
				
				{/* Логотип по центру пофиксить */}
				{/* <div className=" justify-center">
					<Link href={"/"}>
						<Image src={logo} alt="Logo" width={24} height={24} className="shrink-0" />
					</Link>
				</div> */}

				{/* Меню ссылок */}
				<span className="flex gap-8 items-center">
					{links.map((link) => (
						<A
							key={link.text}
							activeClassName="text-white"
							activeLooseMatch={link.loose}
							className="font-header font-medium"
							href={link.href}>
							{link.text}
						</A>
					))}
				</span>

				{/* Кнопки Donate и Join */}
				<span className="hidden md:flex gap-8 flex-grow justify-end">
					<A
						href="https://boosty.to/0riggin/purchase/3086557?ssource=DIRECT&share=subscription_link"
						noIcon={true}
						className="type-header bg-zinc-800 group hover:bg-zinc-900 duration-150 text-zinc-300 px-6 py-1 rounded  border border-zinc-700 focus:border-sky-400">
						Donate{"  "}
						<HeartIcon className="w-5 h-5 inline-block align-text-top group-hover:fill-sky-400 ease-in-out duration-500 group-hover:rotate-12 group-hover:scale-110" />
					</A>
					<A
						href="/wiki/join-info"
						noIcon={true}
						className="type-header bg-sky-500 hover:bg-sky-400 duration-150 text-white px-6 py-1 rounded justify-items-end">
						Подключиться
						<ArrowRightIcon className="w-5 h-5 inline-block align-middle" />
					</A>
				</span>
			</div>
		</nav>
	);
}
