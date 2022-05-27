import { useRouter } from "next/router";

const CoffeeStore = () => {
    const router = useRouter();
    console.log('router', router)
    return(
        <div>Coffee page</div>
    )
}

export default CoffeeStore;