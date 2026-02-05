import type { Metadata } from "next";

import HomeClient from "./HomeClient";
import { defaultLocale, isLocale, type Locale } from "@/i18n/locales";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: string }>;
}): Promise<Metadata> {
	const { lang } = await params;
	const locale: Locale = isLocale(lang) ? lang : defaultLocale;

	const title =
		locale === "pl" ? "Kamil Kazaniecki | Programista Fullstack (React/Next.js)" : "Kamil Kazaniecki | Fullstack Developer";
	const description =
		locale === "pl"
			? "Portfolio i studio. Tworzę szybkie aplikacje webowe w React/Next.js i dowożę MVP z naciskiem na wydajność i SEO."
			: "Portfolio and studio. I build high-performance web apps with React/Next.js and ship MVPs with a focus on performance and SEO.";

	return {
		title,
		description,
		alternates: {
			canonical: locale === "pl" ? "/pl" : "/en",
			languages: {
				en: "/en",
				pl: "/pl",
			},
		},
	};
}

export default async function HomePage() {
	return <HomeClient />;
}
