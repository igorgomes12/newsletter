import NewsletterForm from "@/components/ui/newsletter-form";
import Link from "next/link";

export default function Home() {
    return (
        <section className="space-y-6 pt-6 pb-8 md:pb-12 mb:pt-10 lg-py-32">
            <div className="container flex flex-col items-center gap-4 text-center max-w-[64rem]">
                <div className="flex gap-2">
                    <Link
                        href={"https://twitter.com/IgorAnj2067537"}
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                        target="_blank"
                    >
                        Twitter
                    </Link>
                    <Link
                        href={"https://www.instagram.com/igor_anjos9/"}
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                        target="_blank"
                    >
                        Instagram
                    </Link>
                    <Link
                        href={"https://github.com/igorgomes12"}
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                        target="_blank"
                    >
                        Github
                    </Link>
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Segue os perfils relacionados a minha rede, caso queira
                    entrar em contato.
                </h1>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 ">
                    Quer saber mais sobre, não perca tempo, cadastre aqui seu
                    email que te retorno!
                </p>
                <NewsletterForm />
            </div>
        </section>
    );
}
