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

// May contain unused imports in some cases
// @ts-ignore
import { DocumentResponse } from './document-response';
// May contain unused imports in some cases
// @ts-ignore
import { DocumentResponseDocument } from './document-response-document';
// May contain unused imports in some cases
// @ts-ignore
import { ProcessStatusResponseIngestProgress } from './process-status-response-ingest-progress';
// May contain unused imports in some cases
// @ts-ignore
import { ProcessStatusResponseIngestProgressComplete } from './process-status-response-ingest-progress-complete';

/**
 * 
 * @export
 * @interface ProcessStatusResponseIngest
 */
export interface ProcessStatusResponseIngest {
    /**
     * 
     * @type {string}
     * @memberof ProcessStatusResponseIngest
     */
    'processId'?: string;
    /**
     * 
     * @type {ProcessStatusResponseIngestProgress}
     * @memberof ProcessStatusResponseIngest
     */
    'progress'?: ProcessStatusResponseIngestProgress;
    /**
     * 
     * @type {string}
     * @memberof ProcessStatusResponseIngest
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessStatusResponseIngest
     */
    'statusMessage'?: string;
}

