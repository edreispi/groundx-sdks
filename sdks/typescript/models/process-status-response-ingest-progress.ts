/*
GroundX API

Ground Your RAG Apps in Fact not Fiction

The version of the OpenAPI document: 1.0.0
Contact: support@groundx.ai

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { DocumentResponse } from './document-response';
import { DocumentResponseDocument } from './document-response-document';
import { ProcessStatusResponseIngestProgressComplete } from './process-status-response-ingest-progress-complete';

/**
 * 
 * @export
 * @interface ProcessStatusResponseIngestProgress
 */
export interface ProcessStatusResponseIngestProgress {
    /**
     * 
     * @type {ProcessStatusResponseIngestProgressComplete}
     * @memberof ProcessStatusResponseIngestProgress
     */
    'complete'?: ProcessStatusResponseIngestProgressComplete;
    /**
     * 
     * @type {ProcessStatusResponseIngestProgressComplete}
     * @memberof ProcessStatusResponseIngestProgress
     */
    'errors'?: ProcessStatusResponseIngestProgressComplete;
    /**
     * 
     * @type {ProcessStatusResponseIngestProgressComplete}
     * @memberof ProcessStatusResponseIngestProgress
     */
    'processing'?: ProcessStatusResponseIngestProgressComplete;
}

