# Generated by Django 5.0.4 on 2024-05-02 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('position_name', models.CharField(max_length=150)),
                ('company_name', models.CharField(max_length=100)),
                ('applied_at', models.DateField(auto_now_add=True)),
                ('rejected', models.BooleanField(default=False)),
                ('oa_sent', models.BooleanField(db_index=True, default=False)),
                ('priority', models.IntegerField(db_index=True, default=1)),
            ],
        ),
    ]