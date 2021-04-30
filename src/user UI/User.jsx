import UserNav from "./componenets/UserNav"
import Content from "./componenets/Content"
import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom'

export default function User() {
    return (
        <>
            {/* <Navbar/>
        <Link to="/userCustom"></Link> */}
            {/* <UserNav>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, impedit at maxime, cum eos distinctio quidem numquam in aut voluptate quibusdam fugit ipsam quo ratione facilis rerum veritatis excepturi omnis provident quae. Consequatur repellendus unde commodi culpa, rem laboriosam soluta quidem sunt, veniam consequuntur aperiam! Culpa itaque atque magnam, perferendis non est amet. Atque ducimus id necessitatibus totam modi eligendi sint. Non reiciendis debitis sed blanditiis perspiciatis aut perferendis aspernatur. Cumque atque veritatis cupiditate aut, nam, laudantium, explicabo tempore porro quis ab nesciunt pariatur accusamus. Modi iusto blanditiis consequuntur nihil accusantium sapiente ullam nesciunt doloremque officiis. Blanditiis, aut debitis, architecto voluptas mollitia quis deleniti iusto dolorem eos nisi repellendus illo, eaque doloremque dolorum. Ipsum nostrum pariatur odio architecto quis unde est aut fugit debitis, vel dolorem illum veniam accusamus exercitationem magnam? Earum maxime cumque nisi? Quod facilis magni, laboriosam pariatur dignissimos doloremque nobis fugit animi quae architecto rerum maiores explicabo officiis, alias sapiente necessitatibus saepe voluptatum earum illum quis! Dolor neque nulla rem, numquam incidunt vel omnis quos eius voluptatibus porro quasi odit illum tenetur. Necessitatibus maxime iste temporibus quam, repellat cum corrupti, non amet ex quae error veritatis distinctio quibusdam. Consequatur, quos. Consequuntur fugiat voluptate itaque modi nam error eaque. Sint, ad, nobis debitis voluptate possimus id aspernatur ut atque aperiam assumenda deserunt ipsa. Ipsa nostrum sint molestiae animi dolorem soluta distinctio quod! Iusto possimus maxime voluptate a corporis sint dolore enim, magni blanditiis inventore, voluptatem consequatur perspiciatis? Tempora, ut aliquam id quasi adipisci ab blanditiis soluta velit quae error dolorem placeat voluptates tenetur reprehenderit quo exercitationem? Id fugit repudiandae itaque perferendis esse sequi tempore, omnis debitis, ab ea beatae aliquam temporibus. Nostrum quis voluptatum accusantium a maxime doloremque asperiores maiores perferendis repellendus earum, labore eos laudantium incidunt, ipsa recusandae placeat quae rerum nihil. Non accusamus id quos quasi pariatur dolor alias eligendi, eum fugit repellat minima laudantium, impedit cupiditate architecto animi rem incidunt! Nulla ad ea minus consectetur nobis quisquam omnis corporis voluptatem, consequuntur eaque tempore perferendis dicta natus ratione expedita quam sit nostrum vero ullam dolor autem sed. Nihil aliquam similique voluptatibus sed eos. Adipisci, magni facilis cupiditate laborum ad natus assumenda error quod repudiandae eius voluptatem officiis architecto tempora explicabo voluptates ipsa illum eveniet officia asperiores! Aut incidunt harum, nobis est atque eaque minima? Quisquam facilis, quae, sequi, aliquam eligendi laborum repudiandae maxime eveniet tempora consequatur a veritatis cum. Quisquam ex perferendis laudantium ipsum ratione officiis, consectetur illum, deserunt provident dicta suscipit tempora repellat, maxime sint? Molestiae consequatur illo esse dolor aspernatur molestias blanditiis unde quibusdam dolore sint. Sequi dicta reiciendis quam iure, possimus maiores sunt, rerum illo deleniti velit provident labore asperiores. A obcaecati voluptatem impedit sit tempora molestiae iusto minima nostrum veritatis temporibus expedita dolor doloremque, reprehenderit excepturi, tenetur saepe nobis eum perspiciatis reiciendis perferendis fugit non? Hic, et. Consequuntur quo nihil atque corrupti quas soluta cumque ullam. Reiciendis praesentium sit modi, libero laborum ex magni non labore ipsa qui voluptas error nisi ea consectetur officia. Tenetur voluptatibus corporis praesentium omnis. Maiores, veniam sapiente!
        </UserNav> */}
            {/* <Content/> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
