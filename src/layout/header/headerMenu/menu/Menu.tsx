import React from 'react';


const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>
            {props.menuItems.map((item, i) => {
                return <ListItem key={i}>
                    <Link href="">{item}
                        <Mask>
                            <span>{item}</span>
                        </Mask>
                        <Mask>
                            <span>{item}</span>
                        </Mask>
                    </Link>
                </ListItem>
            })}
        </ul>
    );
};

export default Menu;


