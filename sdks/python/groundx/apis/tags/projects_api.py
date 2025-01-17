# coding: utf-8

"""
    GroundX API

    Ground Your RAG Apps in Fact not Fiction

    The version of the OpenAPI document: 1.0.0
    Contact: support@groundx.ai
    Created by: https://www.groundx.ai/
"""

from groundx.paths.v1_project_project_id.get import Get
from groundx.paths.v1_project.get import List
from groundx.paths.v1_project_project_id.put import Update


class ProjectsApi(
    Get,
    List,
    Update,
):
    """NOTE:
    This class is auto generated by Konfig (https://konfigthis.com)
    """
    pass
