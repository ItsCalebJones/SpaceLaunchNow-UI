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
  PaginatedUpdateList,
  UpdatesListParams,
  Update
} from '../../model'


/**
 * API endpoint that allows Updates to be viewed.

GET:
Return a list of all the existing Updates.

FILTERS:
Parameters - 'created_on', 'launch__id', 'program__id', 'launch__launch_service_provider__id',
Example - /api/2.2.0/updates/?status=Active


ORDERING:
Fields - 'created_on',
Example - /api/2.2.0/updates/?ordering=-created_on
 */
export const updatesList = (
    params?: UpdatesListParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PaginatedUpdateList>> => {
    return axios.get(
      `/2.2.0/updates/`,{
        params,
    ...options}
    );
  }


export const getUpdatesListQueryKey = (params?: UpdatesListParams,) => [`/2.2.0/updates/`, ...(params ? [params]: [])];

    
export type UpdatesListQueryResult = NonNullable<Awaited<ReturnType<typeof updatesList>>>
export type UpdatesListQueryError = AxiosError<unknown>

export const useUpdatesList = <TData = Awaited<ReturnType<typeof updatesList>>, TError = AxiosError<unknown>>(
 params?: UpdatesListParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof updatesList>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getUpdatesListQueryKey(params);

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof updatesList>>> = ({ signal }) => updatesList(params, { signal, ...axiosOptions });

  const query = useQuery<Awaited<ReturnType<typeof updatesList>>, TError, TData>(queryKey, queryFn, queryOptions)

  return {
    queryKey,
    ...query
  }
}

/**
 * API endpoint that allows Updates to be viewed.

GET:
Return a list of all the existing Updates.

FILTERS:
Parameters - 'created_on', 'launch__id', 'program__id', 'launch__launch_service_provider__id',
Example - /api/2.2.0/updates/?status=Active


ORDERING:
Fields - 'created_on',
Example - /api/2.2.0/updates/?ordering=-created_on
 */
export const updatesRetrieve = (
    id: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Update>> => {
    return axios.get(
      `/2.2.0/updates/${id}/`,options
    );
  }


export const getUpdatesRetrieveQueryKey = (id: number,) => [`/2.2.0/updates/${id}/`];

    
export type UpdatesRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof updatesRetrieve>>>
export type UpdatesRetrieveQueryError = AxiosError<unknown>

export const useUpdatesRetrieve = <TData = Awaited<ReturnType<typeof updatesRetrieve>>, TError = AxiosError<unknown>>(
 id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof updatesRetrieve>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getUpdatesRetrieveQueryKey(id);

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof updatesRetrieve>>> = ({ signal }) => updatesRetrieve(id, { signal, ...axiosOptions });

  const query = useQuery<Awaited<ReturnType<typeof updatesRetrieve>>, TError, TData>(queryKey, queryFn, {enabled: !!(id), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}
