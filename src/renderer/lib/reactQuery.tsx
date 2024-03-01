import {
    QueryClient,
    DefaultOptions,
} from '@tanstack/react-query';


const defaultOptions: DefaultOptions = {
    queries: {
        retry: false,
        refetchOnWindowFocus: true,
    },
};

export const queryClient = new QueryClient({ defaultOptions: defaultOptions });
