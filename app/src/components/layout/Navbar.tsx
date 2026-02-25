

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#experience", label: "Experience"},
    {href: "#projects", label: "Projects"},
    {href: "#testimonials", label: "Testimonials"},
    {href: "#contact", label: "Contact"},
]

// o cara do tutorial prefere começar pelo navbar e depois ir para as outras partes (de cima para baixo, tecnicamente)
export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-light hover:text-primary">LA<span className="text-primary">.</span></a> 
                <div className="felx items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {/* mapear os links é como se fosse usar um for para percorrer o array e aí exibir cada link que eu criei com a label */}
                        {navLinks.map((link, index) => (
                        <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}