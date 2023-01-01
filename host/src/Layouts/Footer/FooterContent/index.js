import React from 'react'

const FooterContent = () => {
    const footer = [{name: 'BestPrice', lists: ["About us","Contact us","Forum","Newsroom"]}, {name: 'Learn more', lists: []}, {name: 'Partners & Advertisers', lists: []}]
    const social = ["fb", "tweet", "LinkedIn", "instagram"]
    return (
        <div style={{background: '#453C67', color: 'white', }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '80vw', margin: '0 auto', padding: '5rem 0', }}>
                {
                    footer.map((foo, i) => (
                        <div key={i}>
                            <h2>{foo.name}</h2>
                            <ul style={{ listStyle: 'none', paddingLeft: '0'}}>
                                {
                                    foo.lists && foo.lists.map((list, j) => (
                                        <li key={j} style={{ paddingBottom: '1rem', cursor: 'pointer'}}>{list}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
                <div style={{ width: '25%', }}>
                    <h2>Why Best Price?</h2>
                    <p>Since BestPrice, it has helped millions of visitors find the best products at the best prices.</p>
                    <div>
                        <p>You'll find us:</p>
                        <h3>Kingdom of Saudi Arabia</h3>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '80vw', margin: '0 auto', padding: '5rem 0', }}>
                <div>
                    <h1>Saudi Best Price</h1>
                    <p>Copyright 2021-2022 bestprice are reserved</p>
                </div>
                <div>
                    <ul style={{ listStyle: 'none', paddingLeft: '0', display: 'flex', }}>
                        {
                            social.map( (soc, k) => (
                                <li key={k} style={{marginLeft: k !== social.length ? '1rem' : '0rem', cursor: 'pointer'}}>{soc}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterContent