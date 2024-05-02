from django.db import models

'''
for every user what information do we want to hold ?
    - date applied - text
    - name of the position - text
    - company text
    - rejected ? bool/option field
    - oa ? bool/option field/ accompanying submit by date?
'''

class Application(models.Model):
    position_name = models.CharField(max_length=150)
    company_name = models.CharField(max_length=100)
    applied_at = models.DateField(auto_now_add=True)
    rejected = models.BooleanField(default=False)
    oa_sent = models.BooleanField(default=False, db_index=True)
    priority = models.IntegerField(default=1, db_index=True)
