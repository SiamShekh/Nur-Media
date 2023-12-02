import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import Loading from "../shared/Loading";

const RequestVideo = (api) => {
    const Axios = useAxios();

    const { isPending, refetch, data } = useQuery({
        queryKey: [api],
        queryFn: async () => {
            const res = await Axios.get(api);
            return res;
        }
    })

    if (isPending) {
        return <Loading />
    }

    return { isPending, refetch, data };
};

export default RequestVideo;