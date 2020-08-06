package com.ontimize.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("GastoDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/GastoDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")

public class GastoDao extends OntimizeJdbcDaoSupport {
	public static final String ATTR_ID = "ID";
	public static final String ATTR_CONCEPT = "CONCEPT";
	public static final String ATTR_STARTDATE = "STARTDATE";
	public static final String ATTR_COMMENTS = "COMMENTS";
	public static final String ATTR_CATEGORY = "CATEGORY";
	public static final String ATTR_AMOUNT = "AMOUNT";
	public static final String ATTR_PRICE = "PRICE";
	public static final String ATTR_PHOTO = "PHOTO";
	public static final String ATTR_IDPARTE = "IDPARTE";
	public static final String QUERY_VGASTO = "VGASTO";
	public static final String QUERY_DETAILS = "details";
}
