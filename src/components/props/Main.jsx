import { Card } from './Card'

const Main = () => {

    const variations = { sm: 50, lg: 75, xl: 100 };

    return (
        <>
            <h1>Main Component</h1>

            <Card
                title="shampoo"
                price={45}
                variations={variations}
                color={["pink", "yellow"]}
            />
            <Card title="soap" price={75} variations={{ sm: 50, lg: 75, xl: 100 }} />
            <Card title="bodywash" price={665} />
            <Card title="lotion" />
            <Card title="facewash" price={245} />
        </>
    )
}

export default Main