import Link from "next/link";
import React, { Component } from "react";

class Footer extends Component {


    render() {

        return(
        <>
        <div className='container'>
      <footer className='py-3 my-4'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'>
            <Link href='/' className='nav-link px-2 text-muted'>
              Home
            </Link>
          </li>
        </ul>
        <p className='text-center text-muted'>© 2021 Kowsar Rahman, Inc</p>
      </footer>
    </div>
        </>
    );
    }
}

export default Footer;