import Image from "next/image";
import Link from "next/link";
import linkedin from "../../../public/Assets/linkedin.svg";
import facebook from "../../../public/Assets/facebook.svg";
import twitter from "../../../public/Assets/twitter.svg"
import instagram from "../../../public/Assets/instagram.svg"
import thread from "../../../public/Assets/thread.svg"
import tiktok from "../../../public/Assets/tik_tok.svg"

// import vec2 from "../../../public/Assets/Vector-2.svg";
import logo from "../../../public/Assets/Frame.svg";
import loc from "../../../public/Assets/Location.svg";
import phone from "../../../public/Assets/phone.svg";
import msg from "../../../public/Assets/Message.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container my-5 pt-5">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="">
                <Image src={logo} />
              </div>
              <div>
                <p className=" mt-4">
                &quot;Make your payments effortless with PaySa&quot;
                </p>
              </div>
              <div className="d-flex flex-row ">
                <div className="">
                  <Link className="link" href={"https://www.facebook.com/paysa.technologies/"}>
                    <Image src={facebook} />
                  </Link>
                </div>
                <div className=" ms-2">
                  <Link className="link" href={"https://www.linkedin.com/company/paysatechnologies"}>
                    <Image src={linkedin} />
                  </Link>
                </div>
                <div className="ms-2">
                  <Link className="link" href={"https://www.instagram.com/paysa_tech/"}>
                    <Image src={instagram} />
                  </Link>
                </div>
                <div className="ms-2">
                  <Link className="link" href={"https://twitter.com/PaySa_pk"}>
                    <Image src={twitter} />
                  </Link>
                </div>
                <div className="ms-2">
                  <Link className="link" href={""}>
                    <Image src={thread} />
                  </Link>
                </div>
                <div className="ms-2">
                  <Link className="link" href={"https://www.tiktok.com/@paysa_tech"}>
                    <Image src={tiktok} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 ">
              <div className=" ">
                <h4 className="mt-1 ">Navigation</h4>
                <Link href={"/"} className="link">
                  <p>Home</p>
                </Link>{" "}
                <Link href={"/services"} className="link">
                  <p>Services</p>
                </Link>{" "}
                <Link href={"/articles"} className="link">
                  <p>Articles</p>
                </Link>
                <Link href={"/aboutus"} className="link">
                  <p>About Us</p>
                </Link>
                <Link href={"/contactus"} className="link">
                  <p>Contact Us</p>
                </Link> <Link href={"/careers"} className="link">
                  <p>Careers</p>
                </Link>
                {/* <p>Privacy Policy</p> */}
              </div>
            </div>
            {/* <div className="col-lg-3 col-sm-12">
              <div className="About_Us ">
                <h4 className="mt-1">Services</h4>

                <Link href={""} className="link">
                  <p>Savings</p>
                </Link>
                <Link href={""} className="link">
                  <p>Deposit</p>
                </Link>
                <Link href={""} className="link">
                  <p>Investment</p>
                </Link>
                <Link href={""} className="link">
                  <p>Finance Handling</p>
                </Link>
              </div>
            </div> */}
            <div className="col-lg-4 col-sm-12">
              <div className=" ">
                <h4 className="mt-1">Contact Us</h4>
                <div className="d-flex">
                  <Image
                    className="mt-1 me-4 "
                    src={msg}
                    width={20}
                    height={18}
                  />

                  <p className=""> info@paysapk.com</p>
                </div>
                <div className="d-flex">
                  <Image
                    className=" me-4 "
                    src={phone}
                    width={20}
                    height={18}
                  />
                  <p>051-6102041</p>
                </div>
                <div className="d-flex">
                  <Image className=" me-4" src={loc} width={19} height={23} />

                  <p className="">
                  45 Jinnah Boulevard, Sector E Commercial Area, Phase 2, DHA, Islamabad, 45730
                  </p>
                </div>
                <div className="d-flex">
                  <Image className=" me-4" src={loc} width={19} height={23} />

                  <p className="">
                  Paysa FTDP Pvt ltd
Regus office No 302, 3rd - Floor
Askari Corporate Tower
75-76 D-1, Main Boulevard,
Gulberg III, Lahore
54660
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="joyn">Website Powered by  
          <Link className="" href={"https://joyngroup.com/"}> Joyn</Link></p>
        </div>
      </div>
    </>
  );
}

export default Footer;
