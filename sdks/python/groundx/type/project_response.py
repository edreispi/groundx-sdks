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

from groundx.type.bucket_detail import BucketDetail
from groundx.type.project_detail import ProjectDetail

class RequiredProjectResponse(TypedDict):
    pass

class OptionalProjectResponse(TypedDict, total=False):
    project: ProjectDetail

class ProjectResponse(RequiredProjectResponse, OptionalProjectResponse):
    pass
