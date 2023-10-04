/* tslint:disable */
/* eslint-disable */
/**
 * GroundX API
 * Ground Your RAG Apps in Fact not Fiction
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@groundx.ai
 *
 * NOTE: This file is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { InventoryItem } from '../models';
// @ts-ignore
import { Manufacturer } from '../models';
import { paginate } from "../pagination/paginate";
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * InventoryApi - axios parameter creator
 * @export
 */
export const InventoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds an item to the system
         * @summary adds an inventory item
         * @param {InventoryItem} [inventoryItem] Inventory item to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        add: async (inventoryItem?: InventoryItem, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/inventory`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-Key", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: inventoryItem,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(inventoryItem, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * By passing in the appropriate options, you can search for available inventory in the system 
         * @summary searches inventory
         * @param {string} [searchString] pass an optional search string for looking up inventory
         * @param {number} [skip] number of records to skip for pagination
         * @param {number} [limit] maximum number of records to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        search: async (searchString?: string, skip?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/inventory`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-Key", configuration })
            if (searchString !== undefined) {
                localVarQueryParameter['searchString'] = searchString;
            }

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InventoryApi - functional programming interface
 * @export
 */
export const InventoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InventoryApiAxiosParamCreator(configuration)
    return {
        /**
         * Adds an item to the system
         * @summary adds an inventory item
         * @param {InventoryApiAddRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async add(requestParameters: InventoryApiAddRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.add(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * By passing in the appropriate options, you can search for available inventory in the system 
         * @summary searches inventory
         * @param {InventoryApiSearchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async search(requestParameters: InventoryApiSearchRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InventoryItem>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.search(requestParameters.searchString, requestParameters.skip, requestParameters.limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InventoryApi - factory interface
 * @export
 */
export const InventoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InventoryApiFp(configuration)
    return {
        /**
         * Adds an item to the system
         * @summary adds an inventory item
         * @param {InventoryApiAddRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        add(requestParameters: InventoryApiAddRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.add(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * By passing in the appropriate options, you can search for available inventory in the system 
         * @summary searches inventory
         * @param {InventoryApiSearchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        search(requestParameters: InventoryApiSearchRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<InventoryItem>> {
            return localVarFp.search(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for add operation in InventoryApi.
 * @export
 * @interface InventoryApiAddRequest
 */
export type InventoryApiAddRequest = {
    
} & InventoryItem

/**
 * Request parameters for search operation in InventoryApi.
 * @export
 * @interface InventoryApiSearchRequest
 */
export type InventoryApiSearchRequest = {
    
    /**
    * pass an optional search string for looking up inventory
    * @type {string}
    * @memberof InventoryApiSearch
    */
    readonly searchString?: string
    
    /**
    * number of records to skip for pagination
    * @type {number}
    * @memberof InventoryApiSearch
    */
    readonly skip?: number
    
    /**
    * maximum number of records to return
    * @type {number}
    * @memberof InventoryApiSearch
    */
    readonly limit?: number
    
}

/**
 * InventoryApiGenerated - object-oriented interface
 * @export
 * @class InventoryApiGenerated
 * @extends {BaseAPI}
 */
export class InventoryApiGenerated extends BaseAPI {
    /**
     * Adds an item to the system
     * @summary adds an inventory item
     * @param {InventoryApiAddRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryApiGenerated
     */
    public add(requestParameters: InventoryApiAddRequest, options?: AxiosRequestConfig) {
        return InventoryApiFp(this.configuration).add(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * By passing in the appropriate options, you can search for available inventory in the system 
     * @summary searches inventory
     * @param {InventoryApiSearchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryApiGenerated
     */
    public search(requestParameters: InventoryApiSearchRequest = {}, options?: AxiosRequestConfig) {
        return InventoryApiFp(this.configuration).search(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
