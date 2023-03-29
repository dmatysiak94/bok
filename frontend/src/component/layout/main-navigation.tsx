import Logo from "./logo";
import Link from "next/link";
import classes from "./main-navigation.module.css"
import React from "react";
import Button from "@/component/UI/Button";

const MainNavigation : React.FC = () => {
    return (
        <header className={classes.header}>
            <Link href='/'>
                <Logo/>
            </Link>
            <nav>
                <ul>
                    <li><Button><Link href="/form">Add Comment</Link></Button></li>
                    <li><Button><Link href="/bok">Bok Panel</Link></Button></li>
                    <li><Button><Link href="/auth">Log In</Link></Button></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;