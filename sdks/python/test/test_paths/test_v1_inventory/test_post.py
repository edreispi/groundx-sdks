# coding: utf-8

"""
    GroundX API

    Ground Your RAG Apps in Fact not Fiction

    The version of the OpenAPI document: 1.0.0
    Contact: support@groundx.ai
    Generated by: https://konfigthis.com
"""

import unittest
from unittest.mock import patch

import urllib3

import groundx
from groundx.paths.v1_inventory import post
from groundx import configuration, schemas, api_client

from .. import ApiTestMixin


class TestV1Inventory(ApiTestMixin, unittest.TestCase):
    """
    V1Inventory unit test stubs
        adds an inventory item
    """

    def setUp(self):
        pass

    def tearDown(self):
        pass

    response_status = 201
    response_body = ''


if __name__ == '__main__':
    unittest.main()