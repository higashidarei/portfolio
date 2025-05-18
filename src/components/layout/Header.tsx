"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Header() {
  useEffect(() => {
    const hmbBtn = document.querySelector('.js-hmb-btn')
    const menu = document.querySelector('.menu-sp')
    let isOpen = false

    /**
     * メニューを開く処理を行います。
     */
    const open = () => {
      hmbBtn.classList.add('active')
      menu.classList.add('open')
      document.body.classList.add('is-menu-open')
      document.body.style.overflow = 'hidden'
      isOpen = true
    }

    /**
     * メニューを閉じる処理を行います。
     */
    const close = () => {
      hmbBtn.classList.remove('active')
      menu.classList.remove('open')
      document.body.classList.remove('is-menu-open')
      document.body.style.overflow = 'visible'
      isOpen = false
    }

    hmbBtn.addEventListener('click', () => {
      if (isOpen) {
        close()
      } else {
        open()
      }
    })

  }, []);
  return (
    <header className="header">
      <div className="header__logo"><Link href="/" data-transition>LOGO</Link></div>
      <div className="header__hmbbtn js-hmb-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link>
      </nav> */}
    </header>
  );
}
