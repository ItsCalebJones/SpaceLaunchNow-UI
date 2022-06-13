/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * Launch Library
 * The Launch Library API is a product by The Space Devs with an up-to-date database of Spaceflight events. 

While this API is free to use it is subject to rate limiting for non-authenticated requests.

Please use https://lldev.thespacedevs.com for development testing - the development endpoint has stale data but is not subject to any rate limits.

If you are interested in a higher rate limit please consider supporting the project on Patreon for access to an API Key.
 * OpenAPI spec version: v2.2.0
 */
import axios,{
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery,
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey
} from 'react-query'
import type {
  PaginatedPadList,
  PadListParams,
  Pad
} from '../../model'


/**
 * API endpoint that allows Location instances to be viewed.

GET:
Return a list of all the existing location instances.

FILTERS:
Parameters - 'name', 'location'
Example - /2.2.0/pad/?location=12
 */
export const padList = (
    params?: PadListParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PaginatedPadList>> => {
    return axios.get(
      `/2.2.0/pad/`,{
        params,
    ...options}
    );
  }


export const getPadListQueryKey = (params?: PadListParams,) => [`/2.2.0/pad/`, ...(params ? [params]: [])];

    
export type PadListQueryResult = NonNullable<Awaited<ReturnType<typeof padList>>>
export type PadListQueryError = AxiosError<unknown>

export const usePadList = <TData = Awaited<ReturnType<typeof padList>>, TError = AxiosError<unknown>>(
 params?: PadListParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof padList>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getPadListQueryKey(params);

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof padList>>> = ({ signal }) => padList(params, { signal, ...axiosOptions });

  const query = useQuery<Awaited<ReturnType<typeof padList>>, TError, TData>(queryKey, queryFn, queryOptions)

  return {
    queryKey,
    ...query
  }
}

/**
 * API endpoint that allows Location instances to be viewed.

GET:
Return a list of all the existing location instances.

FILTERS:
Parameters - 'name', 'location'
Example - /2.2.0/pad/?location=12
 */
export const padRetrieve = (
    id: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Pad>> => {
    return axios.get(
      `/2.2.0/pad/${id}/`,options
    );
  }


export const getPadRetrieveQueryKey = (id: number,) => [`/2.2.0/pad/${id}/`];

    
export type PadRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof padRetrieve>>>
export type PadRetrieveQueryError = AxiosError<unknown>

export const usePadRetrieve = <TData = Awaited<ReturnType<typeof padRetrieve>>, TError = AxiosError<unknown>>(
 id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof padRetrieve>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getPadRetrieveQueryKey(id);

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof padRetrieve>>> = ({ signal }) => padRetrieve(id, { signal, ...axiosOptions });

  const query = useQuery<Awaited<ReturnType<typeof padRetrieve>>, TError, TData>(queryKey, queryFn, {enabled: !!(id), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}

