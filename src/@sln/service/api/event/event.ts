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
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import {
  useQuery,
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey,
} from "react-query";
import type {
  PaginatedEventsList,
  EventListParams,
  Events,
  EventPreviousListParams,
  EventUpcomingListParams,
} from "../../model";

/**
 * API endpoint that allows all Events to be viewed.

GET:
Return a list of all Events

SEARCH EXAMPLE:
/2.2.0/event/?search=Dragon
Searches through name
 */
export const eventList = (
  params?: EventListParams,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<PaginatedEventsList>> => {
  return axios.get(`/2.2.0/event/`, {
    params,
    ...options,
  });
};

export const getEventListQueryKey = (params?: EventListParams) => [
  `/2.2.0/event/`,
  ...(params ? [params] : []),
];

export type EventListQueryResult = NonNullable<
  Awaited<ReturnType<typeof eventList>>
>;
export type EventListQueryError = AxiosError<unknown>;

export const useEventList = <
  TData = Awaited<ReturnType<typeof eventList>>,
  TError = AxiosError<unknown>
>(
  params?: EventListParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof eventList>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getEventListQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof eventList>>> = ({
    signal,
  }) => eventList(params, { signal, ...axiosOptions });

  const query = useQuery<Awaited<ReturnType<typeof eventList>>, TError, TData>(
    queryKey,
    queryFn,
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

/**
 * API endpoint that allows all Events to be viewed.

GET:
Return a list of all Events

SEARCH EXAMPLE:
/2.2.0/event/?search=Dragon
Searches through name
 */
export const eventRetrieve = (
  id: number,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<Events>> => {
  return axios.get(`/2.2.0/event/${id}/`, options);
};

export const getEventRetrieveQueryKey = (id: number) => [`/2.2.0/event/${id}/`];

export type EventRetrieveQueryResult = NonNullable<
  Awaited<ReturnType<typeof eventRetrieve>>
>;
export type EventRetrieveQueryError = AxiosError<unknown>;

export const useEventRetrieve = <
  TData = Awaited<ReturnType<typeof eventRetrieve>>,
  TError = AxiosError<unknown>
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof eventRetrieve>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getEventRetrieveQueryKey(id);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof eventRetrieve>>> = ({
    signal,
  }) => eventRetrieve(id, { signal, ...axiosOptions });

  const query = useQuery<
    Awaited<ReturnType<typeof eventRetrieve>>,
    TError,
    TData
  >(queryKey, queryFn, { enabled: !!id, ...queryOptions });

  return {
    queryKey,
    ...query,
  };
};

/**
 * API endpoint that allows past Events to be viewed.

GET:
Return a list of past Events
 */
export const eventPreviousList = (
  params?: EventPreviousListParams,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<PaginatedEventsList>> => {
  return axios.get(`/2.2.0/event/previous/`, {
    params,
    ...options,
  });
};

export const getEventPreviousListQueryKey = (
  params?: EventPreviousListParams
) => [`/2.2.0/event/previous/`, ...(params ? [params] : [])];

export type EventPreviousListQueryResult = NonNullable<
  Awaited<ReturnType<typeof eventPreviousList>>
>;
export type EventPreviousListQueryError = AxiosError<unknown>;

export const useEventPreviousList = <
  TData = Awaited<ReturnType<typeof eventPreviousList>>,
  TError = AxiosError<unknown>
>(
  params?: EventPreviousListParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof eventPreviousList>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getEventPreviousListQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof eventPreviousList>>> =
    ({ signal }) => eventPreviousList(params, { signal, ...axiosOptions });

  const query = useQuery<
    Awaited<ReturnType<typeof eventPreviousList>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

/**
 * API endpoint that allows past Events to be viewed.

GET:
Return a list of past Events
 */
export const eventPreviousRetrieve = (
  id: number,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<Events>> => {
  return axios.get(`/2.2.0/event/previous/${id}/`, options);
};

export const getEventPreviousRetrieveQueryKey = (id: number) => [
  `/2.2.0/event/previous/${id}/`,
];

export type EventPreviousRetrieveQueryResult = NonNullable<
  Awaited<ReturnType<typeof eventPreviousRetrieve>>
>;
export type EventPreviousRetrieveQueryError = AxiosError<unknown>;

export const useEventPreviousRetrieve = <
  TData = Awaited<ReturnType<typeof eventPreviousRetrieve>>,
  TError = AxiosError<unknown>
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof eventPreviousRetrieve>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getEventPreviousRetrieveQueryKey(id);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof eventPreviousRetrieve>>
  > = ({ signal }) => eventPreviousRetrieve(id, { signal, ...axiosOptions });

  const query = useQuery<
    Awaited<ReturnType<typeof eventPreviousRetrieve>>,
    TError,
    TData
  >(queryKey, queryFn, { enabled: !!id, ...queryOptions });

  return {
    queryKey,
    ...query,
  };
};

/**
 * API endpoint that allows future Events to be viewed.

GET:
Return a list of future Events
 */
export const eventUpcomingList = (
  params?: EventUpcomingListParams,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<PaginatedEventsList>> => {
  return axios.get(`/2.2.0/event/upcoming/`, {
    params,
    ...options,
  });
};

export const getEventUpcomingListQueryKey = (
  params?: EventUpcomingListParams
) => [`/2.2.0/event/upcoming/`, ...(params ? [params] : [])];

export type EventUpcomingListQueryResult = NonNullable<
  Awaited<ReturnType<typeof eventUpcomingList>>
>;
export type EventUpcomingListQueryError = AxiosError<unknown>;

export const useEventUpcomingList = <
  TData = Awaited<ReturnType<typeof eventUpcomingList>>,
  TError = AxiosError<unknown>
>(
  params?: EventUpcomingListParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof eventUpcomingList>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getEventUpcomingListQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof eventUpcomingList>>> =
    ({ signal }) => eventUpcomingList(params, { signal, ...axiosOptions });

  const query = useQuery<
    Awaited<ReturnType<typeof eventUpcomingList>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

/**
 * API endpoint that allows future Events to be viewed.

GET:
Return a list of future Events
 */
export const eventUpcomingRetrieve = (
  id: number,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<Events>> => {
  return axios.get(`/2.2.0/event/upcoming/${id}/`, options);
};

export const getEventUpcomingRetrieveQueryKey = (id: number) => [
  `/2.2.0/event/upcoming/${id}/`,
];

export type EventUpcomingRetrieveQueryResult = NonNullable<
  Awaited<ReturnType<typeof eventUpcomingRetrieve>>
>;
export type EventUpcomingRetrieveQueryError = AxiosError<unknown>;

export const useEventUpcomingRetrieve = <
  TData = Awaited<ReturnType<typeof eventUpcomingRetrieve>>,
  TError = AxiosError<unknown>
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof eventUpcomingRetrieve>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getEventUpcomingRetrieveQueryKey(id);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof eventUpcomingRetrieve>>
  > = ({ signal }) => eventUpcomingRetrieve(id, { signal, ...axiosOptions });

  const query = useQuery<
    Awaited<ReturnType<typeof eventUpcomingRetrieve>>,
    TError,
    TData
  >(queryKey, queryFn, { enabled: !!id, ...queryOptions });

  return {
    queryKey,
    ...query,
  };
};
