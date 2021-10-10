import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Route from "next/router";
import React from "react";
import Img from "../components/Img";
import { open_drawer } from "../utils/Global";
type TabsType = "HOME" | "MENU" | "STAFFS" | "ABOUT" | "CONTACTS";
enum ETabs {
    "HOME",
    "MENU",
    "STAFFS",
    "ABOUT",
    "CONTACTS",
}
const ITabs = ["/", "/menu", "/staffs", "/about", "/contacts"];
type Props = {
    activeTab: TabsType;
};
const Header = (props: Props) => 
{
    const [activeTab, setActiveTab] = React.useState<number>(0);
    React.useEffect(() => {
        setActiveTab(ETabs[props.activeTab] || 0);
    }, []);

    const handleClickMenu = () => {
        open_drawer({
            Name: "OPEN_DRAWER",
            DrawerData: {},
            Anchor: "left"
        })
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
        // const tabIndex = ETabs[newValue];
        const route: string = ITabs[newValue];
        Route.push(route);
    };
    const handleClickLogo = () => {
        Route.push('/')
    }
    return (
        <React.Fragment>
            <div className="header">
                <div className="container-fluid d-flex justify-content-between align-items-center p-2 px-4">
                    <div className="header_logo">
                        <Img
                            src="/logo.png"
                            style={{
                                height: "fit-content",
                                width: "INHERIT",
                            }}
                            onClick={handleClickLogo}
                            loading="lazy"
                            alt="SpicyDeli"
                        />
                    </div>
                    <div className="nav_bar">
                        <Tabs onChange={handleChange} value={+activeTab} aria-label="Tabs where selection follows focus">
                            <Tab disableRipple label="Home" />
                            <Tab disableRipple label="Menu" />
                            <Tab disableRipple label="Staffs" />
                            <Tab disableRipple label="About" />
                            <Tab disableRipple label="Contacts" />
                        </Tabs>
                    </div>
                    <div className="nav_icon">
                        <IconButton onClick={handleClickMenu} size="large">
                            <MenuIcon style={{color: "#fff"}} fontSize="large" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
