# coding: utf-8

"""
    GroundX API

    Ground Your RAG Apps in Fact not Fiction

    The version of the OpenAPI document: 1.0.0
    Contact: support@groundx.ai
    Created by: https://www.groundx.ai/
"""

import unittest
from unittest.mock import patch

import urllib3

import groundx
from groundx.paths.v1_bucket import get
from groundx import configuration, schemas, api_client

from .. import ApiTestMixin


class TestV1Bucket(ApiTestMixin, unittest.TestCase):
    """
    V1Bucket unit test stubs
        Look up existing buckets
    """

    def setUp(self):
        pass

    def tearDown(self):
        pass

    response_status = 200




if __name__ == '__main__':
    unittest.main()
