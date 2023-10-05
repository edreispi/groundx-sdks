# coding: utf-8
"""
    GroundX API

    Ground Your RAG Apps in Fact not Fiction

    The version of the OpenAPI document: 1.0.0
    Contact: support@groundx.ai
    Generated by: https://konfigthis.com
"""

import typing
import inspect
from datetime import date, datetime
from groundx.client_custom import ClientCustom
from groundx.configuration import Configuration
from groundx.api_client import ApiClient
from groundx.type_util import copy_signature
from groundx.apis.tags.api_key_management_api import APIKeyManagementApi
from groundx.apis.tags.bucket_api import BucketApi
from groundx.apis.tags.document_api import DocumentApi
from groundx.apis.tags.preprocessor_api import PreprocessorApi
from groundx.apis.tags.project_api import ProjectApi
from groundx.apis.tags.search_api import SearchApi



class Groundx(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.api_key_management: APIKeyManagementApi = APIKeyManagementApi(api_client)
        self.bucket: BucketApi = BucketApi(api_client)
        self.document: DocumentApi = DocumentApi(api_client)
        self.preprocessor: PreprocessorApi = PreprocessorApi(api_client)
        self.project: ProjectApi = ProjectApi(api_client)
        self.search: SearchApi = SearchApi(api_client)
