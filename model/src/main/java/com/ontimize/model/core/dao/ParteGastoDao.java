package com.ontimize.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("ParteGastoDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/PartegastoDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ParteGastoDao  extends OntimizeJdbcDaoSupport{
	public static final String ATTR_ID_PARTEGASTO = "ID_PARTEGASTO";
	public static final String ATTR_IDPARTE = "IDPARTE";
	public static final String ATTR_IDGASTO = "IDGASTO";
}
