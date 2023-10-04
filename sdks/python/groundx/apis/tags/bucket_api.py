# coding: utf-8

"""
    GroundX API

    Ground Your RAG Apps in Fact not Fiction

    The version of the OpenAPI document: 1.0.0
    Contact: support@groundx.ai
    Generated by: https://konfigthis.com
"""

from groundx.paths.v1_bucket.post import Create
from groundx.paths.v1_bucket_bucket_id.delete import Delete
from groundx.paths.v1_bucket_bucket_id.get import Get
from groundx.paths.v1_bucket.get import List
from groundx.paths.v1_bucket_bucket_id.put import Update


class BucketApi(
    Create,
    Delete,
    Get,
    List,
    Update,
):
    """NOTE:
    This class is auto generated by Konfig (https://konfigthis.com)
    """
    pass
