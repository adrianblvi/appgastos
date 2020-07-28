package com.ontimize.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("CategoryDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/CategoryDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class CategoryDao  extends OntimizeJdbcDaoSupport{

 public static final String ATTR_ID = "ID";
 public static final String ATTR_DESCRIPTION = "DESCRIPTION";
 public static final String ATTR_PRICE = "PRICE";
}