from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse


class StaticSitemap(Sitemap):
    def items(self):
        return ['landing', 'contacts', 'members', 'accommodation', 'tickets']

    def location(self, item):
        return reverse(item)