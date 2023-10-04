# coding: utf-8

"""
    GroundX API

    Ground Your RAG Apps in Fact not Fiction

    The version of the OpenAPI document: 1.0.0
    Contact: support@groundx.ai
    Generated by: https://konfigthis.com
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal

from groundx.type.bucket_create_request_bucket import BucketCreateRequestBucket

class RequiredBucketCreateRequest(TypedDict):
    pass

class OptionalBucketCreateRequest(TypedDict, total=False):
    bucket: BucketCreateRequestBucket

class BucketCreateRequest(RequiredBucketCreateRequest, OptionalBucketCreateRequest):
    pass
