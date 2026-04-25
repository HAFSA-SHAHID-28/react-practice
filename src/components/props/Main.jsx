import { Card } from './Card'
import PropCard from './PropCard';
import Button from "./Button";

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


            <PropCard
                title="shampoo"
                price={45}
                variations={variations}
                color={["pink", "yellow", "black", "white", "yellow"]}
            />
            <PropCard title="soap" price={75} variations={{ sm: 50, lg: 75, xl: 100 }} />
            <PropCard title="bodywash" price={665} />
            <PropCard title="lotion" />
            <PropCard title="facewash" price={245} />


            {/* butoon prop */}

            <Button text="View Details" />
            <Button text="Sign Up" icon="fa-solid fa-user" iconBg={true} />
            <Button text="Edit" icon="fa-solid fa-pen-to-square" />
            <Button text="Delete" icon="fa-solid fa-trash-can" iconBg={true} />


        </>
    )
}

export default Main