package com.ontimize.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("ParteDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ParteDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ParteDao extends OntimizeJdbcDaoSupport {
	public static final String ATTR_IDPARTE = "IDPARTE";
	public static final String ATTR_DESCRIPTION = "DESCRIPTION";
	public static final String ATTR_DATE = "DATE";
	public static final String ATTR_COMMENT = "COMMENT";
	public static final String ATTR_GASTO = "GASTO";
	public static final String ATTR_STATUS = "STATUS";
	public static final String ATTR_ENDDATE = "ENDDATE";
}
